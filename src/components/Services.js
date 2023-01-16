import Title from "./Title";
import { services } from "../data.js";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title word_1="our" word_2="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return <Service key={service.id} service={service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
