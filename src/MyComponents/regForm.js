// import * as Yup from 'yup';

// import { useFormik } from 'formik';

// import React, { Component } from 'react'
// const professions = ['Developer', 'Designer', 'Other'];
// const formik = useFormik({
//   initialValues: {
//     name: '',
//     email: '',
//     profession: professions[0],
//     age: '',
//   },
//   validationSchema: Yup.object({
//     name: Yup.string()
//             .label('Full Name')
//             .required()
//             .test('is-full-name', 'Please enter both your first and last name', function (value) {
//               const nameArr = value.split(" ");
//               return nameArr.length >= 2;
//             }),
//     email: Yup.string()
//             .email()
//             .required(),
//     profession: Yup.string()
//                 .oneOf(professions, 'The profession you chose does not exist'),
//     age: Yup.number()
//           .min(15, 'You need to be older than 15 to register')
//           .required()
//   }),
//   onSubmit: function (values) {
//     alert(`You are registered! Name: ${values.name}. Email: ${values.email}. Profession: ${values.profession}. 
//       Age: ${values.age}`);
//   }
// });

// export default class regForm extends Component {
//   render() {
//     return (
//       <div>
        
//   );
//       </div>
//     )
//   }
// }





