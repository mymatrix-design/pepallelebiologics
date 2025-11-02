import coursesData from "./data/courses.json";
import CardGrid from "./CardGrid";

export default function Courses() {
  const levels = (coursesData as any).levels ?? [];

  return (
    <section className="py-12">
      <div className="space-y-12">
        {levels.map((lvl: any, i: number) => (
          <CardGrid
            key={i}
            data={lvl.courses}
            imageBasePath="/courses/"
            heading={lvl.title}
          />
        ))}
      </div>
    </section>
  );
}
