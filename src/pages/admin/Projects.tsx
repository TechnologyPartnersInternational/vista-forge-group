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
  X,
  PlusCircle
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const AdminProjects = () => {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  
  // Form State
  const initialFormState = {
    title: '',
    subtitle: '',
    client: '',
    service: '',
    category: '',
    industry: '',
    location: '',
    year: '',
    status: 'completed',
    heroImage: '',
    summary: '',
    problem: '',
    approach: '',
    result: '',
    metrics: [] as { label: string; value: string }[],
    delivered: [] as string[],
    collaborators: [] as string[],
    mainContent: [] as { heading: string; text: string }[],
    testimonial: {
      quote: '',
      author: '',
      role: '',
    },
    galleryImages: [] as string[],
  };

  const [formData, setFormData] = useState(initialFormState);

  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: api.getProjects,
  });

  const createMutation = useMutation({
    mutationFn: api.createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      setIsAddDialogOpen(false);
      toast.success('Project created successfully');
      setFormData(initialFormState);
    },
    onError: () => toast.error('Failed to create project'),
  });

  const deleteMutation = useMutation({
    mutationFn: api.deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success('Project deleted');
    },
  });

  const filteredProjects = projects?.filter((p: any) => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) {
        toast.error('Title is required');
        return;
    }
    const id = formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    createMutation.mutate({ ...formData, id });
  };

  // Helper functions for dynamic fields
  const addMetric = () => setFormData({ ...formData, metrics: [...formData.metrics, { label: '', value: '' }] });
  const updateMetric = (index: number, field: 'label' | 'value', val: string) => {
    const newMetrics = [...formData.metrics];
    newMetrics[index][field] = val;
    setFormData({ ...formData, metrics: newMetrics });
  };
  const removeMetric = (index: number) => setFormData({ ...formData, metrics: formData.metrics.filter((_, i) => i !== index) });

  const addDelivered = () => setFormData({ ...formData, delivered: [...formData.delivered, ''] });
  const updateDelivered = (index: number, val: string) => {
    const newDelivered = [...formData.delivered];
    newDelivered[index] = val;
    setFormData({ ...formData, delivered: newDelivered });
  };
  const removeDelivered = (index: number) => setFormData({ ...formData, delivered: formData.delivered.filter((_, i) => i !== index) });

  const addCollaborator = () => setFormData({ ...formData, collaborators: [...formData.collaborators, ''] });
  const updateCollaborator = (index: number, val: string) => {
    const newCollaborators = [...formData.collaborators];
    newCollaborators[index] = val;
    setFormData({ ...formData, collaborators: newCollaborators });
  };
  const removeCollaborator = (index: number) => setFormData({ ...formData, collaborators: formData.collaborators.filter((_, i) => i !== index) });

  const addContent = () => setFormData({ ...formData, mainContent: [...formData.mainContent, { heading: '', text: '' }] });
  const updateContent = (index: number, field: 'heading' | 'text', val: string) => {
    const newContent = [...formData.mainContent];
    newContent[index][field] = val;
    setFormData({ ...formData, mainContent: newContent });
  };
  const removeContent = (index: number) => setFormData({ ...formData, mainContent: formData.mainContent.filter((_, i) => i !== index) });

  const addGalleryImage = () => setFormData({ ...formData, galleryImages: [...formData.galleryImages, ''] });
  const updateGalleryImage = (index: number, val: string) => {
    const newImages = [...formData.galleryImages];
    newImages[index] = val;
    setFormData({ ...formData, galleryImages: newImages });
  };
  const removeGalleryImage = (index: number) => setFormData({ ...formData, galleryImages: formData.galleryImages.filter((_, i) => i !== index) });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-navy">Projects</h1>
          <p className="text-muted-foreground mt-1">Manage and update your portfolio items.</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="navy-gradient text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add New Project
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] h-[90vh] overflow-hidden flex flex-col p-0">
            <form onSubmit={handleCreate} className="flex flex-col h-full">
              <DialogHeader className="p-6 pb-0">
                <DialogTitle>Add New Project</DialogTitle>
                <DialogDescription>
                  Enter the full details for the new project.
                </DialogDescription>
              </DialogHeader>
              
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid grid-cols-4 mb-6 sticky top-0 bg-white z-10">
                    <TabsTrigger value="basic">Basic Info</TabsTrigger>
                    <TabsTrigger value="details">Details & Content</TabsTrigger>
                    <TabsTrigger value="metrics">Metrics & Lists</TabsTrigger>
                    <TabsTrigger value="media">Testimonial & Media</TabsTrigger>
                  </TabsList>

                  <TabsContent value="basic" className="space-y-4 pt-0">
                    <div className="grid gap-2">
                      <Label htmlFor="title">Project Title *</Label>
                      <Input 
                        id="title" 
                        value={formData.title} 
                        onChange={e => setFormData({...formData, title: e.target.value})}
                        placeholder="e.g. Niger Delta Soil Remediation" 
                        required 
                      />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="subtitle">Subtitle</Label>
                        <Input 
                            id="subtitle" 
                            value={formData.subtitle} 
                            onChange={e => setFormData({...formData, subtitle: e.target.value})}
                            placeholder="e.g. Hydrocarbon Contaminated Site Restoration" 
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="client">Client *</Label>
                        <Input 
                          id="client" 
                          value={formData.client} 
                          onChange={e => setFormData({...formData, client: e.target.value})}
                          placeholder="e.g. Shell" 
                          required 
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="year">Year *</Label>
                        <Input 
                          id="year" 
                          value={formData.year} 
                          onChange={e => setFormData({...formData, year: e.target.value})}
                          placeholder="2024" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="industry">Industry</Label>
                            <Input 
                                id="industry" 
                                value={formData.industry} 
                                onChange={e => setFormData({...formData, industry: e.target.value})}
                                placeholder="e.g. Oil & Gas" 
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="location">Location</Label>
                            <Input 
                                id="location" 
                                value={formData.location} 
                                onChange={e => setFormData({...formData, location: e.target.value})}
                                placeholder="e.g. Rivers State, Nigeria" 
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="service">Service</Label>
                        <Select onValueChange={v => setFormData({...formData, service: v})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Environment">Environment</SelectItem>
                            <SelectItem value="Laboratory Services">Laboratory Services</SelectItem>
                            <SelectItem value="Waste Management Services">Waste Management Services</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="category">Category *</Label>
                        <Input 
                          id="category" 
                          value={formData.category} 
                          onChange={e => setFormData({...formData, category: e.target.value})}
                          placeholder="e.g. Remediation" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="status">Status</Label>
                        <Select defaultValue="completed" onValueChange={v => setFormData({...formData, status: v as any})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ongoing">Ongoing</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="heroImage">Hero Image URL</Label>
                        <Input 
                          id="heroImage" 
                          value={formData.heroImage} 
                          onChange={e => setFormData({...formData, heroImage: e.target.value})}
                          placeholder="https://..." 
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-4 pt-0">
                    <div className="grid gap-2">
                      <Label htmlFor="summary">Brief Summary *</Label>
                      <textarea 
                        id="summary" 
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formData.summary} 
                        onChange={e => setFormData({...formData, summary: e.target.value})}
                        placeholder="Provide a short description of the project"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="problem">The Problem</Label>
                      <textarea 
                        id="problem" 
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formData.problem} 
                        onChange={e => setFormData({...formData, problem: e.target.value})}
                        placeholder="What challenge was addressed?"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="approach">The Approach</Label>
                      <textarea 
                        id="approach" 
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formData.approach} 
                        onChange={e => setFormData({...formData, approach: e.target.value})}
                        placeholder="How was the project executed?"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="result">The Result</Label>
                      <textarea 
                        id="result" 
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formData.result} 
                        onChange={e => setFormData({...formData, result: e.target.value})}
                        placeholder="What was the outcome?"
                      />
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                        <div className="flex items-center justify-between">
                            <Label>Extra Content Sections</Label>
                            <Button type="button" variant="ghost" size="sm" onClick={addContent} className="h-8 text-navy">
                                <PlusCircle className="w-4 h-4 mr-1" /> Add Section
                            </Button>
                        </div>
                        {formData.mainContent.map((content, idx) => (
                            <div key={idx} className="space-y-4 p-4 bg-mist/50 rounded-lg relative">
                                <Button 
                                    type="button" 
                                    variant="ghost" 
                                    size="icon" 
                                    className="absolute top-2 right-2 text-destructive h-8 w-8" 
                                    onClick={() => removeContent(idx)}
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                                <div className="grid gap-2 pr-8">
                                    <Label>Heading</Label>
                                    <Input value={content.heading} onChange={e => updateContent(idx, 'heading', e.target.value)} placeholder="Section Heading" />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Text</Label>
                                    <textarea 
                                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        value={content.text} 
                                        onChange={e => updateContent(idx, 'text', e.target.value)} 
                                        placeholder="Section content" 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="metrics" className="space-y-6 pt-0">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label>Key Metrics</Label>
                            <Button type="button" variant="ghost" size="sm" onClick={addMetric} className="h-8 text-navy">
                                <PlusCircle className="w-4 h-4 mr-1" /> Add Metric
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            {formData.metrics.map((m, idx) => (
                                <div key={idx} className="flex gap-2 items-center">
                                    <Input value={m.label} onChange={e => updateMetric(idx, 'label', e.target.value)} placeholder="Label (e.g. Sites Remediated)" className="flex-1" />
                                    <Input value={m.value} onChange={e => updateMetric(idx, 'value', e.target.value)} placeholder="Value (e.g. 14)" className="flex-1" />
                                    <Button type="button" variant="ghost" size="icon" className="text-destructive" onClick={() => removeMetric(idx)}><X className="w-4 h-4" /></Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                        <div className="flex items-center justify-between">
                            <Label>Delivered Items</Label>
                            <Button type="button" variant="ghost" size="sm" onClick={addDelivered} className="h-8 text-navy">
                                <PlusCircle className="w-4 h-4 mr-1" /> Add Item
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            {formData.delivered.map((d, idx) => (
                                <div key={idx} className="flex gap-2 items-center">
                                    <Input value={d} onChange={e => updateDelivered(idx, e.target.value)} placeholder="e.g. Tier-1 ESA Study" className="flex-1" />
                                    <Button type="button" variant="ghost" size="icon" className="text-destructive" onClick={() => removeDelivered(idx)}><X className="w-4 h-4" /></Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                        <div className="flex items-center justify-between">
                            <Label>Collaborators</Label>
                            <Button type="button" variant="ghost" size="sm" onClick={addCollaborator} className="h-8 text-navy">
                                <PlusCircle className="w-4 h-4 mr-1" /> Add Collaborator
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            {formData.collaborators.map((c, idx) => (
                                <div key={idx} className="flex gap-2 items-center">
                                    <Input value={c} onChange={e => updateCollaborator(idx, e.target.value)} placeholder="e.g. FMEnv" className="flex-1" />
                                    <Button type="button" variant="ghost" size="icon" className="text-destructive" onClick={() => removeCollaborator(idx)}><X className="w-4 h-4" /></Button>
                                </div>
                            ))}
                        </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="media" className="space-y-6 pt-0">
                    <div className="space-y-4">
                        <Label>Testimonial</Label>
                        <div className="space-y-4 p-4 bg-navy/5 rounded-lg">
                            <div className="grid gap-2">
                                <Label className="text-[10px] uppercase text-muted-foreground">Quote</Label>
                                <textarea 
                                    className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    value={formData.testimonial.quote} 
                                    onChange={e => setFormData({...formData, testimonial: {...formData.testimonial, quote: e.target.value}})}
                                    placeholder="What did the client say?"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label className="text-[10px] uppercase text-muted-foreground">Author Name</Label>
                                    <Input value={formData.testimonial.author} onChange={e => setFormData({...formData, testimonial: {...formData.testimonial, author: e.target.value}})} placeholder="Author" />
                                </div>
                                <div className="grid gap-2">
                                    <Label className="text-[10px] uppercase text-muted-foreground">Role/Company</Label>
                                    <Input value={formData.testimonial.role} onChange={e => setFormData({...formData, testimonial: {...formData.testimonial, role: e.target.value}})} placeholder="Role" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t">
                        <div className="flex items-center justify-between">
                            <Label>Gallery Images</Label>
                            <Button type="button" variant="ghost" size="sm" onClick={addGalleryImage} className="h-8 text-navy">
                                <PlusCircle className="w-4 h-4 mr-1" /> Add Image
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                            {formData.galleryImages.map((img, idx) => (
                                <div key={idx} className="flex gap-2 items-center">
                                    <Input value={img} onChange={e => updateGalleryImage(idx, e.target.value)} placeholder="Image URL (https://...)" className="flex-1" />
                                    <Button type="button" variant="ghost" size="icon" className="text-destructive" onClick={() => removeGalleryImage(idx)}><X className="w-4 h-4" /></Button>
                                </div>
                            ))}
                        </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <DialogFooter className="p-6 pt-2 bg-mist/30 border-t">
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
                <Button type="submit" className="navy-gradient text-white" disabled={createMutation.isPending}>
                  {createMutation.isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  Create Project
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-navy/5 shadow-sm">
        <Search className="w-4 h-4 text-muted-foreground" />
        <Input 
          placeholder="Search projects by title or client..." 
          className="border-none shadow-none focus-visible:ring-0 px-0"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-xl border border-navy/5 shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-mist/50">
            <TableRow>
              <TableHead className="font-bold text-navy">Project Title</TableHead>
              <TableHead className="font-bold text-navy">Client</TableHead>
              <TableHead className="font-bold text-navy">Service</TableHead>
              <TableHead className="font-bold text-navy">Status</TableHead>
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
            ) : filteredProjects?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                  No projects found.
                </TableCell>
              </TableRow>
            ) : (
              filteredProjects?.map((project: any) => (
                <TableRow key={project.id} className="hover:bg-mist/30">
                  <TableCell className="font-medium text-navy">{project.title}</TableCell>
                  <TableCell>{project.client}</TableCell>
                  <TableCell>{project.service}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-full ${
                      project.status === 'completed' 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {project.status}
                    </span>
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
                            if(confirm('Are you sure you want to delete this project?')) {
                              deleteMutation.mutate(project.id);
                            }
                          }}
                        >
                          <Trash2 className="w-4 h-4 mr-2" /> Delete
                        </DropdownMenuItem>
                        <Separator className="my-1" />
                        <DropdownMenuItem className="cursor-pointer" onClick={() => window.open(`/projects/${project.id}`, '_blank')}>
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

export default AdminProjects;
