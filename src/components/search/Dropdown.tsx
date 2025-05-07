interface DropdownProps {
  label: string;
  options: string[];
}

export default function Dropdown({ label, options }: Readonly<DropdownProps>) {
  return (
    <>
      <label className="dropdown-label" htmlFor={label}>{label}</label>
      <select className="dropdown-select" defaultValue="" name={label} id={label}>
        <option value="" disabled>Selecciona una {label}</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </>
  )
}