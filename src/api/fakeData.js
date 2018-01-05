const fakeData = {
  data: [
    {
      id: 1,
      name: "Good Guy",
      condition: true,
      email: "goodguy@email.com",
      receivers: ["coolguy@email.com", "badguy@email.com"]
    },
    {
      id: 2,
      name: "Cool Guy",
      condition: true,
      email: "coolguy@email.com",
      receivers: ["goodguy@email.com", "badguy@email.com"]
    },
    {
      id: 3,
      name: "Bad Guy",
      condition: true,
      email: "badguy@email.com",
      receivers: ["goodguy@email.com", "coolguy@email.com"]
    }
  ],
  checkedItems: []
};

export default fakeData;
