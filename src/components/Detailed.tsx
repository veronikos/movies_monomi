import React from "react"; // we need this to make JSX compile
import { useParams } from "react-router-dom";

type CardProps = {
  title: string;
  paragraph: string;
};

type slug = {
  slug: any;
};

export function Detailed({ title, paragraph }: CardProps) {
  let { slug }: slug = useParams();
  return (
    <aside>
      <h2> {title} </h2> <p>{paragraph} </p>{" "}
      <div>
        <h3>ID: {slug}</h3>
      </div>{" "}
    </aside>
  );
}
