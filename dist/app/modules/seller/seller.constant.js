'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.facultyFilterableFields =
  exports.facultySearchableFields =
  exports.designation =
  exports.bloodGroup =
  exports.gender =
    void 0;
exports.gender = ['male', 'female'];
exports.bloodGroup = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
exports.designation = ['Professor', 'Assistant Professor', 'Lecturer'];
exports.facultySearchableFields = [
  'id',
  'email',
  'contactNo',
  'name.firstName',
  'name.middleName',
  'name.lastName',
];
exports.facultyFilterableFields = [
  'searchTerm',
  'id',
  'bloodGroup',
  'email',
  'contactNo',
  'emergencyContactNo',
];
