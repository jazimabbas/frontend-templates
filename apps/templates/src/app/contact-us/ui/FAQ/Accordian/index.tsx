"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { RiAddCircleLine, RiIndeterminateCircleLine } from "@remixicon/react";
import { Wrapper, Item, Content, Title, Icon } from "./Client";

type Props = {
  isLast?: boolean;
  title: string;
  description: string;
};

export function Accordian({ isLast = false, title, description }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Wrapper>
      <Item>
        <Content>
          <Title as="button" onClick={() => setIsExpanded(!isExpanded)}>
            {title}
          </Title>
          <motion.p
            style={{ overflow: "hidden" }}
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, marginBottom: isExpanded ? "28px" : 0 }}
          >
            {description}
          </motion.p>
        </Content>
        <Icon as={isExpanded ? RiIndeterminateCircleLine : RiAddCircleLine} />
      </Item>
      {!isLast && <hr />}
    </Wrapper>
  );
}
