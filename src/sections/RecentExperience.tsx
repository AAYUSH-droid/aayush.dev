import React, { ReactElement } from "react";
import Button from "~/components/Button";
import Container from "~/components/Container";
import PostCard from "~/components/PostCard";
import Link from "next/link";
import { Post } from "~/types/blog";
import { Exprience } from "~/lib/data/exp";
import exp from "~/lib/data/exp";

interface Props {
  posts: Post[];
}

export default function RecentExp({ posts }: Props): ReactElement {
  return (
    //experience section
    <section id="recent-posts">
      <Container
        heading="Experience"
        headingSize="small"
        className="mt-12 mb-6"
      >
        <div className="flex flex-col space-y-6">
          <p>Some of my previous experience working as a SDE intern.</p>
          {exp.map((experience: Exprience, index: number) => (
            <div key={index} className="p-0">
              <h2 className="text-xl font-semibold mb-[10px]">
                {experience.title}
              </h2>
              <p className="text-gray-600 mb-[8px]">{experience.description}</p>
              <div className="flex space-x-2">
                <span>TechStack:</span>
                {experience.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-200 rounded-md text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
