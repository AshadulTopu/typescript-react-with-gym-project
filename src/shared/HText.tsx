

type Props = {
  children: React.ReactNode;
};

export default function HText({ children }: Props) {
  return (
    <h1 className="mb-6 font-dmsans text-5xl font-bold text-gray-500">
      {children}
    </h1>
  );
}
