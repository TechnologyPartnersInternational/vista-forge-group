import { creditsFor } from "@/data/marineServices";

/** One line of licence credits for the stand-in photographs a page shows. */
const PhotoCredits = ({ images }: { images: (string | undefined)[] }) => {
  const credits = creditsFor(images);
  if (credits.length === 0) return null;

  return (
    <div className="bg-white px-4 md:px-12 pb-4">
      <p className="text-xs text-muted-foreground leading-relaxed">
        Photographs:{" "}
        {credits.map((c, i) => (
          <span key={c.key}>
            <a
              href={c.page}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-border hover:text-primary hover:decoration-primary transition-colors"
            >
              {c.by}
            </a>{" "}
            ({c.licence}){i < credits.length - 1 ? ", " : "."}
          </span>
        ))}{" "}
        Via Wikimedia Commons.
      </p>
    </div>
  );
};

export default PhotoCredits;
