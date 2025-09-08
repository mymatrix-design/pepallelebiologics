import coursesData from './data/courses.json';
import CardGrid from './CardGrid';

export default function Courses() {
  return <CardGrid data={coursesData.items} imageBasePath={"courses/"} heading="Pep Allele Education : Courses" />;
}
