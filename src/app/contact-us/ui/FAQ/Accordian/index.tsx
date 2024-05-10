"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { RiAddCircleLine, RiIndeterminateCircleLine } from "@remixicon/react";
import { Wrapper, Item, Content, Title, Icon } from "./Client";

export function Accordian({ isLast = false }: { isLast?: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Wrapper>
      <Item>
        <Content>
          <Title as="button" onClick={() => setIsExpanded(!isExpanded)}>
            What types of images are available on your platform?
          </Title>
          <motion.p
            style={{ overflow: "hidden" }}
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, marginBottom: isExpanded ? "28px" : 0 }}
          >
            Our platform offers a diverse range of abstract images to suit various preferences and
            needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a
            wide selection to cater to different tastes.
          </motion.p>
        </Content>
        <Icon as={isExpanded ? RiIndeterminateCircleLine : RiAddCircleLine} />
      </Item>
      {!isLast && <hr />}
    </Wrapper>
  );
}
