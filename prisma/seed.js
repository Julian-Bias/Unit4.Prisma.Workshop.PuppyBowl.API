const prisma = require("../prisma");

const seed = async () => {
  // Create 10 players
  const dogs = [
    { name: "Swisher", breed: "Black Lab", status: "FIELD", imageUrl: "http://example.com/swisher.jpghttps://dogtime.com/wp-content/uploads/sites/12/2024/01/GettyImages-590608307-e1706029609404.jpg?w=1024" },
    { name: "Buddy", breed: "Lab", status: "BENCH", imageUrl: "https://www.dogster.com/wp-content/uploads/2024/03/Golden-Labrador-Retriever-in-the-grass-field.jpg" },
    { name: "Max", breed: "Beagle", status: "FIELD", imageUrl: "https://dogtime.com/wp-content/uploads/sites/12/2023/11/GettyImages-157603001-e1701106766955.jpg?w=1024" },
    { name: "Charlie", breed: "Bulldog", status: "BENCH", imageUrl: "https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-168620477-e1691273341205.jpg?w=1024" },
    { name: "Bella", breed: "Poodle", status: "FIELD", imageUrl: "https://imageserver.petsbest.com/marketing/blog/toy-poodle.jpg" },
    { name: "Lincoln", breed: "Dachshund", status: "BENCH", imageUrl: "https://animalcarecentersmyrna.com/wp-content/uploads/2021/08/Untitled-design-2021-08-19T162152.857-768x644.png" },
    { name: "Rocky", breed: "Rottweiler", status: "FIELD", imageUrl: "https://www.lovemydogz.com/wp-content/uploads/2021/04/gettyimages-1064341208-scaled.jpg" },
    { name: "Molly", breed: "Cocker Spaniel", status: "BENCH", imageUrl: "https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1729684088.0586798/cocker-spaniel-puppies-1.jpg" },
    { name: "Daisy", breed: "Husky", status: "FIELD", imageUrl: "https://www.dogster.com/wp-content/uploads/2023/09/siberian-husky-dog-standing-on-grass_Edalin-Photography_Shutterstock.jpg" },
    { name: "Bailey", breed: "Chi-wee", status: "BENCH", imageUrl: "https://www.dogster.com/wp-content/uploads/2024/04/Chihuahua-dog-standing-on-grass_anetapics_Shutterstock.jpg" },
  ];

  for (const dog of dogs) {
    await prisma.player.create({
      data: dog,
    });
  }

  console.log("Seeding completed successfully!");
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });


