type SectionTitleProps = {
  title: string;
  buttons?: React.JSX.Element;
};

function SectionTitle({ title, buttons }: SectionTitleProps) {
  return (
    <div className="w-full flex justify-between items-center">
      <span className="font-extrabold text-2xl">{title}</span>
      <div className="flex items-center gap-3">{buttons}</div>
    </div>
  );
}

export default SectionTitle;
