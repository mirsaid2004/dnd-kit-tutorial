import React, { Ref } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import clsx from "clsx";
import { Icon } from "@iconify/react";
import "./accordion.css";

export const AccordionTrigger = React.forwardRef(
  (
    {
      children,
      className,
      isIconVisible = true,
      ...props
    }: {
      children: React.ReactNode;
      className?: string;
      isIconVisible?: boolean;
    },
    forwardedRef?: Ref<HTMLButtonElement>
  ) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={clsx("AccordionTrigger", className)}
        ref={forwardedRef}
        {...props}
      >
        {children}
        {isIconVisible && (
          <Icon
            icon="mingcute:down-line"
            className="AccordionChevron"
            aria-hidden
          />
        )}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

export const AccordionContent = React.forwardRef(
  (
    {
      children,
      className,
      ...props
    }: { children: React.ReactNode; className?: string },
    forwardedRef?: Ref<HTMLDivElement>
  ) => (
    <Accordion.Content
      className={clsx("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default { AccordionTrigger, AccordionContent };
