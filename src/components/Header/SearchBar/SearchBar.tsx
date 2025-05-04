'use client'
import { Field, Form, Formik } from "formik";

// interface  SearchProps {
//     onSearch: (value: string) => void;

//   }

const SearchBar = () => {
    return (
        <>
            <Formik initialValues={{}} onSubmit={() => {}}>
             <Form  className="relative w-[74px] h-[32px]">
                <Field
                className="w-full h-full bg-[#E27979] border-[2px] border-white rounded-full pl-4 pr-8 text-white placeholder-white text-sm focus:outline-none"
                type="text"
                name="query"
                autoComplete="off"
                autoFocus
                placeholder=""
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" type="submit"><svg width="22" height="22" className="fill-white">
            <use href="/images/icons.svg#icon-Dandruff" />
          </svg></button>
            </Form>
            </Formik>
        </>
    )
    
}

export default SearchBar;