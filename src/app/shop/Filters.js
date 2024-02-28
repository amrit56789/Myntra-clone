import React from 'react';

const FilterSection = ({
  title,
  options,
  isRadio = false,
  name,
}) => (
  <div className="border-2 border-slate-100">
    <h3 className="uppercase font-semibold p-3 text-sm">{title}</h3>
    <div className="pl-4 pb-3">
      {options.map((option, index) => (
        <div key={index} className="flex">
          <input
            type={isRadio ? "radio" : "checkbox"}
            name={name}
            id={`${name}-${index}`}
          />
          <label htmlFor={`${name}-${index}`} className="font-light p-1 text-xs">
            {option}
          </label>
        </div>
      ))}
    </div>
  </div>
);

export default function Filters() {
  const genderOptions = ['Men', 'Women', 'Boys', 'Girls'];
  const categoryOptions = ['Lipstick', 'Nail Polish', 'Perfume', 'Bindi', 'Lip Gloss', 'Lip Balm'];
  const brandOptions = ['Comet Busters', 'MI FASHION', 'Deve Herbes', 'PERPAA', 'ME-ON', 'Menjewell', 'JOHN PHILLIPS', 'MANASIK'];
  const priceOptions = ['Rs. 19 to Rs. 12490', 'Rs. 12490 to Rs. 24961', 'Rs. 24961 to Rs. 37432', 'Rs. 37432 to Rs. 49903'];
  const colorOptions = ['White', 'Pink', 'Multi', 'Brown', 'Red', 'Blue'];
  const discountOptions = ['10% and above', '20% and above', '30% and above', '40% and above', '50% and above', '60% and above', '70% and above', '80% and above'];

  return (
    <div className="flex-none hover:shadow-xl border-2 border-slate-100 ">
      <FilterSection title="Gender" options={genderOptions} isRadio={true} name="gender" />
      <FilterSection title="Categories" options={categoryOptions} name="category" />
      <FilterSection title="Brand" options={brandOptions} name="brand" />
      <FilterSection title="Price" options={priceOptions} name="price" />
      <FilterSection title="Color" options={colorOptions} name="color" />
      <FilterSection title="Discount Range" options={discountOptions} isRadio={true} name="discount" />
    </div>
  );
}
