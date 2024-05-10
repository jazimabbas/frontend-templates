import { Accordian } from "./Accordian";
import { CustomerSupport } from "./CustomerSupport";
import { AccordianWrapper, Description, Wrapper } from "./Client";

export function FAQ() {
  return (
    <Wrapper>
      <h2 className="center">Frequently asked questions</h2>
      <Description>Choose any questions you need</Description>
      <AccordianWrapper>
        {questions.map((question, idx) => (
          <Accordian
            key={question.title}
            isLast={idx === questions.length - 1}
            title={question.title}
            description={question.description}
          />
        ))}
        <CustomerSupport />
      </AccordianWrapper>
    </Wrapper>
  );
}

const questions: { title: string; description: string }[] = [
  {
    title: "What types of images are available on your platform?",
    description:
      "Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.",
  },
  {
    title: "How can I access and download images from your platform?",
    description:
      "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.",
  },
  {
    title: "Do you offer free images, or is there a subscription required?",
    description:
      "We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.",
  },
  {
    title: "What payment methods do you accept for subscriptions?",
    description:
      "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users.",
  },
  {
    title: "Can I cancel or modify my subscription at any time?",
    description:
      "Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.",
  },
  {
    title: "How frequently do you update your image collection?",
    description:
      "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.",
  },
];
