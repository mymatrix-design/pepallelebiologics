import servicesData from './data/services.json';
import CardGrid from './CardGrid';

export default function Services() {
    return <CardGrid data={servicesData.items} imageBasePath={"services/"} heading="Pep Allele Biologics : Services" />;
}
