document.write("2. Using many array in one array changed in map maethod double qutation.");
  document.write("<br>");
  document.write("<br>");

  const users1 = [
    {
      first_name: 'Mike',
      last_name: 'Sheridan',
      age: 30
    },
    {
      first_name: 'Tim',
      last_name: 'Lee',
      age: 45
    },
    {
      first_name: 'John',
      last_name: 'Carte',
      age: 25
    }
  ];

  const fullNames1 = users1.map(word => `"${word.last_name}"`);
  document.write(fullNames1);