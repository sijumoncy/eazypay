interface IPageHeadProps {
  text: string;
}

function PageHead({ text }: IPageHeadProps) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight | md:text-3xl">
      {text}
    </h2>
  );
}

export default PageHead;
