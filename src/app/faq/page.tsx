// React and Next.js imports
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ArrowUpRight } from 'lucide-react';

// Custom components
import { Section, Container } from '@/components/craft';

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: 'Lorem ipsum dolor sit amet?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://google.com',
  },
  {
    question: 'Ut enim ad minim veniam?',
    answer:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Duis aute irure dolor in reprehenderit?',
    answer:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    question: 'Excepteur sint occaecat cupidatat non proident?',
    answer:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const FAQ = () => {
  return (
    <Section>
      <Container>
        <h1 className="!mt-20 text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <h2 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our customer support
          team.
        </h2>
        <div className="not-prose mt-20 flex flex-col gap-5 md:mt-8">
          {content.map((item, index) => (
            <Accordion.Root key={index} type="single" collapsible>
              <Accordion.Item
                value={item.question}
                className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
              >
                <Accordion.Trigger className="text-left hover:no-underline">
                  {item.question}
                </Accordion.Trigger>
                <Accordion.Content className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
