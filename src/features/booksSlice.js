import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books: [
    {
      id: 1,
      title: "Master React in 5 Days",
      author: " Eric Sarrion",
      category: "tech",
      description: "Learn React step by step with modern projects and real-world applications.",
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/61DiCJZP4EL._AC_UY327_FMwebp_QL65_.jpg",
      link: "https://www.amazon.in/Master-React-Days-Become-Expert/dp/1484298543/ref=sr_1_2?crid=26U3KI23Q9RZD&dib=eyJ2IjoiMSJ9.kl8hOWMhbgFa3aIjubDKKErncdaSrTGP4dqVvEG9Nwv1bJufvKLW7TSd9MBhJD1dFWLhiISR4m1dt9G4qhkyukfAe1KOnJiBnC8eGOjulHC1LH5cTyq8U_KsSqoxNrcWwGE7_uXSGB6_PP-kPUculVmTu4-B-yDDDoVzZgUY7nko4viYbnR_hswXPQiK_LGMKazQ3QfCOTzbtT_8E_QP_9wKPFpVoqt4WCStBReLC5g.XPU93wChMgnWKIEZ-wMb0fMXS1DKnBmsbsPM3sjggRU&dib_tag=se&keywords=React+Master&qid=1774887032&s=books&sprefix=react+master%2Cstripbooks%2C456&sr=1-2"
    },
    {
      id: 2,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      category: "tech",
      description: "A deep dive into the core features of JavaScript.",
      rating: 4.6,
      image: "https://covers.openlibrary.org/b/isbn/9780596517748-L.jpg",
      link: "https://www.amazon.in/dp/0596517742"
    },
    {
      id: 3,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "tech",
      description: "A handbook of agile software craftsmanship.",
      rating: 4.8,
      image: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
      link: "https://www.amazon.in/dp/0132350882"
    },
    {
      id: 4,
      title: "Dune",
      author: "Frank Herbert",
      category: "sci-fi",
      description: "An epic science fiction novel set in a distant future.",
      rating: 4.7,
      image: "https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg",
      link: "https://www.amazon.in/dp/0441013597"
    },
    {
      id: 5,
      title: "The Martian",
      author: "Andy Weir",
      category: "sci-fi",
      description: "A survival story of an astronaut stranded on Mars.",
      rating: 4.8,
      image: "https://covers.openlibrary.org/b/isbn/9780553418026-L.jpg",
      link: "https://www.amazon.in/dp/0553418025"
    },
    {
      id: 6,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      category: "non-fiction",
      description: "A brief history of humankind.",
      rating: 4.9,
      image: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
      link: "https://www.amazon.in/dp/0062316095"
    },
    {
      id: 7,
      title: "Atomic Habits",
      author: "James Clear",
      category: "non-fiction",
      description: "Build good habits and break bad ones effectively.",
      rating: 4.8,
      image: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
      link: "https://www.amazon.in/dp/0735211299"
    },
    {
      id: 8,
      title: "Deep Work",
      author: "Cal Newport",
      category: "non-fiction",
      description: "Rules for focused success in a distracted world.",
      rating: 4.7,
      image: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
      link: "https://www.amazon.in/dp/1455586692"
    }
  ]
}

const slice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      // 🔥 Ensure proper data before adding
      const newBook = {
        ...action.payload,
        id: Date.now(),
        rating: Number(action.payload.rating),
        image: action.payload.image || "https://via.placeholder.com/150"
      }

      state.books.unshift(newBook)
    }
  }
})

export const { addBook } = slice.actions
export default slice.reducer