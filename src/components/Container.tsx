import { forwardRef } from 'react';
import clsx from 'clsx';

interface OuterContainerProps {
  className?: string;
  children: React.ReactNode;
}

interface InnerContainerProps {
  className?: string;
  children: React.ReactNode;
}

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props }: OuterContainerProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props }: InnerContainerProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

interface ContainerComponent
  extends React.ForwardRefExoticComponent<
    ContainerProps & React.RefAttributes<HTMLDivElement>
  > {
  Outer: typeof OuterContainer;
  Inner: typeof InnerContainer;
}

export const Container = forwardRef(function Container(
  { children, ...props }: ContainerProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
}) as ContainerComponent;

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
