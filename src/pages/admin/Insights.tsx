import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Trash2, 
  Edit, 
  ExternalLink,
  Loader2,
  FileText,
  User,
  Image as ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const AdminInsights = () => {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  
  // Form State
  const initialFormState = {
    title: '',
    excerpt: '',
    category: '',
    type: 'Article',
    featured: false,
    content: '',
    bannerImage: '',
    author: {
      name: '',
      role: '',
      image: '',
    },
    lastUpdated: '',
    readTime: '5 min',
  };

  const [formData, setFormData] = useState(initialFormState);

  const { data: insights, isLoading } = useQuery({
    queryKey: ['insights'],
    queryFn: api.getInsights,
  });

  const createMutation = useMutation({
    mutationFn: api.createInsight,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['insights'] });
      setIsAddDialogOpen(false);
      toast.success('Insight published successfully');
      setFormData(initialFormState);
    },
    onError: () => toast.error('Failed to publish insight'),
  });

  const deleteMutation = useMutation({
    mutationFn: api.deleteInsight,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['insights'] });
      toast.success('Insight deleted');
    },
  });

  const filteredInsights = insights?.filter((i: any) => 
    i.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) {
        toast.error('Title is required');
        return;
    }
    const id = formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const date = new Date().toISOString().split('T')[0];
    const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    createMutation.mutate({ ...formData, id, date, lastUpdated });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-navy">Insights</h1>
          <p className="text-muted-foreground mt-1">Publish articles, blogs, and industry updates.</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="navy-gradient text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Insight
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[750px] max-h-[90vh] overflow-y-auto">
            <form onSubmit={handleCreate}>
              <DialogHeader>
                <DialogTitle>New Insight Publication</DialogTitle>
                <DialogDescription>
                  Share your expertise with the world.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Headline *</Label>
                  <Input 
                    id="title" 
                    value={formData.title} 
                    onChange={e => setFormData({...formData, title: e.target.value})}
                    placeholder="Enter the title of your insight" 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category *</Label>
                    <Input 
                      id="category" 
                      value={formData.category} 
                      onChange={e => setFormData({...formData, category: e.target.value})}
                      placeholder="e.g. Environmental Planning" 
                      required 
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="type">Insight Type</Label>
                    <Select defaultValue="Article" onValueChange={v => setFormData({...formData, type: v as any})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Article">Article</SelectItem>
                        <SelectItem value="Issues">Issues</SelectItem>
                        <SelectItem value="Story">Story</SelectItem>
                        <SelectItem value="News">News</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="readTime">Read Time</Label>
                        <Input 
                            id="readTime" 
                            value={formData.readTime} 
                            onChange={e => setFormData({...formData, readTime: e.target.value})}
                            placeholder="e.g. 5 min" 
                        />
                    </div>
                    <div className="flex items-center space-x-2 pt-8">
                        <Checkbox 
                            id="featured" 
                            checked={formData.featured} 
                            onCheckedChange={(checked) => setFormData({...formData, featured: !!checked})} 
                        />
                        <Label htmlFor="featured" className="cursor-pointer">Feature this insight on the main page</Label>
                    </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="bannerImage">Banner Image URL</Label>
                  <div className="relative">
                    <Input 
                        id="bannerImage" 
                        value={formData.bannerImage} 
                        onChange={e => setFormData({...formData, bannerImage: e.target.value})}
                        placeholder="https://images.unsplash.com/..." 
                        className="pl-10"
                    />
                    <ImageIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                <div className="space-y-4 p-4 border rounded-lg bg-mist/30">
                    <Label className="flex items-center gap-2">
                        <User className="w-4 h-4 text-navy" />
                        Author Information
                    </Label>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="authorName">Name</Label>
                            <Input 
                                id="authorName" 
                                value={formData.author.name} 
                                onChange={e => setFormData({...formData, author: {...formData.author, name: e.target.value}})}
                                placeholder="e.g. Andrew Went" 
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="authorRole">Role</Label>
                            <Input 
                                id="authorRole" 
                                value={formData.author.role} 
                                onChange={e => setFormData({...formData, author: {...formData.author, role: e.target.value}})}
                                placeholder="e.g. Project Leader" 
                            />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="authorImage">Author Image URL</Label>
                        <Input 
                            id="authorImage" 
                            value={formData.author.image || ''} 
                            onChange={e => setFormData({...formData, author: {...formData.author, image: e.target.value}})}
                            placeholder="https://..." 
                        />
                    </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="excerpt">Short Excerpt *</Label>
                  <Input 
                    id="excerpt" 
                    value={formData.excerpt} 
                    onChange={e => setFormData({...formData, excerpt: e.target.value})}
                    placeholder="Brief intro for the listing card" 
                    required 
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="content">Full Content *</Label>
                  <textarea 
                    id="content" 
                    className="flex min-h-[250px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.content} 
                    onChange={e => setFormData({...formData, content: e.target.value})}
                    placeholder="Write the full content here. You can use multiple paragraphs."
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
                <Button type="submit" className="navy-gradient text-white" disabled={createMutation.isPending}>
                  {createMutation.isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  Publish Insight
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-navy/5 shadow-sm">
        <Search className="w-4 h-4 text-muted-foreground" />
        <Input 
          placeholder="Search insights by title or category..." 
          className="border-none shadow-none focus-visible:ring-0 px-0"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-xl border border-navy/5 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-mist/50">
            <TableRow>
              <TableHead className="font-bold text-navy">Title</TableHead>
              <TableHead className="font-bold text-navy">Category</TableHead>
              <TableHead className="font-bold text-navy">Type</TableHead>
              <TableHead className="font-bold text-navy">Featured</TableHead>
              <TableHead className="text-right font-bold text-navy">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  <Loader2 className="w-6 h-6 animate-spin mx-auto text-navy" />
                </TableCell>
              </TableRow>
            ) : filteredInsights?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                  No insights found.
                </TableCell>
              </TableRow>
            ) : (
              filteredInsights?.map((insight: any) => (
                <TableRow key={insight.id} className="hover:bg-mist/30">
                  <TableCell className="font-medium text-navy">
                    <div className="flex items-center gap-2">
                       {insight.type === 'Article' ? <FileText className="w-4 h-4 text-muted-foreground" /> : <FileText className="w-4 h-4 text-muted-foreground opacity-50" />}
                      {insight.title}
                    </div>
                  </TableCell>
                  <TableCell>{insight.category}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 text-[10px] font-bold uppercase bg-navy/5 text-navy rounded-full">
                      {insight.type}
                    </span>
                  </TableCell>
                  <TableCell>
                      {insight.featured ? (
                          <span className="px-2 py-1 text-[10px] font-bold uppercase bg-gold/10 text-gold rounded-full">
                            Featured
                          </span>
                      ) : (
                          <span className="text-muted-foreground text-[10px]">No</span>
                      )}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="cursor-pointer">
                          <Edit className="w-4 h-4 mr-2" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="cursor-pointer text-destructive focus:text-destructive"
                          onClick={() => {
                            if(confirm('Delete this insight?')) {
                              deleteMutation.mutate(insight.id);
                            }
                          }}
                        >
                          <Trash2 className="w-4 h-4 mr-2" /> Delete
                        </DropdownMenuItem>
                        <Separator className="my-1" />
                        <DropdownMenuItem className="cursor-pointer" onClick={() => window.open(`/insights/${insight.id}`, '_blank')}>
                          <ExternalLink className="w-4 h-4 mr-2" /> View Public
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminInsights;
