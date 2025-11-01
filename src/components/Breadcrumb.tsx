interface BreadcrumbProps {
  items: { label: string; path?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-[#a8bcd4] mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.path ? (
            <a href={item.path} className="hover:text-[#8FB3F5] transition-colors duration-200 focus-ring">
              {item.label}
            </a>
          ) : (
            <span className="text-[#e8f0f8] font-medium">{item.label}</span>
          )}
          {index < items.length - 1 && <span>/</span>}
        </div>
      ))}
    </nav>
  );
}
