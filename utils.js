const typingTests = [
  {
    id: 1,
    difficulty: "easy",
    text: "The sun shines brightly on a warm summer day, making it perfect for a walk in the park. Birds chirp happily as they flit from tree to tree, searching for food. Children laugh and play, running across the grass, while families enjoy picnics under the shade of large oak trees. A gentle breeze carries the scent of blooming flowers, adding to the peaceful atmosphere. Some people choose to read books on benches, lost in their favorite stories. Others ride bicycles, enjoying the fresh air and exercise. Nearby, a small pond reflects the clear blue sky, and ducks glide effortlessly across the surface. A few people stop to feed them, tossing small pieces of bread into the water. It is a simple yet beautiful scene, reminding everyone of the joys of nature. Taking a break to enjoy the outdoors can bring relaxation and happiness to anyone’s day.",
  },
  {
    id: 2,
    difficulty: "easy",
    text: "Baking a cake can be a fun and rewarding activity. First, you gather all the ingredients: flour, sugar, eggs, butter, milk, and baking powder. Some people like to add vanilla extract or cocoa powder for extra flavor. After preheating the oven, you mix the ingredients together in a large bowl until the batter is smooth. Pouring the mixture into a greased pan ensures that the cake won’t stick. Once the oven is hot, place the pan inside and wait for the magic to happen. The smell of baking cake fills the kitchen, making it hard to wait. After about thirty minutes, you check with a toothpick to see if it’s done. When it comes out clean, the cake is ready to cool. Adding frosting or decorations is the final step before serving. Sharing homemade cake with friends and family makes the experience even more special.",
  },
  {
    id: 3,
    difficulty: "medium",
    text: "Traveling is one of the best ways to experience new cultures, meet interesting people, and see beautiful places. Whether you visit a bustling city or a quiet countryside, every journey offers something unique. Exploring local cuisine is a great way to understand a culture, from spicy dishes in India to fresh seafood in Japan. Museums and historical sites help travelers learn about the past, offering glimpses into ancient civilizations. Language barriers may be challenging, but simple gestures like a smile or a nod can bridge communication gaps. Many travelers keep a journal to record their experiences, jotting down memories and reflections. Photography also captures special moments, preserving them for years to come. While traveling can sometimes be tiring, the rewards outweigh the challenges. The more places you visit, the more you realize how diverse and fascinating the world is. Each trip leaves lasting memories and valuable lessons.",
  },
  {
    id: 4,
    difficulty: "medium",
    text: "Technology has changed the way people live, work, and communicate. Decades ago, letters and landline phones were the primary means of communication. Now, people send instant messages, make video calls, and share moments on social media. Smartphones have become an essential tool, helping with navigation, banking, and even shopping. The rise of artificial intelligence is making tasks easier, from voice assistants answering questions to robots performing complex jobs. However, technology also comes with challenges. Cybersecurity threats, digital addiction, and misinformation are growing concerns. Many experts encourage balance, reminding people to take breaks from screens and engage in real-world interactions. Despite these challenges, technology continues to shape the future. Innovations in medicine, renewable energy, and space exploration promise exciting advancements. As technology evolves, adapting to new tools and learning how to use them wisely will be key to success in the modern world.",
  },
  {
    id: 5,
    difficulty: "hard",
    text: "The theory of evolution explains how species change over time through natural selection. First proposed by Charles Darwin in the 19th century, it suggests that organisms with beneficial traits survive and pass those traits to their offspring. Over generations, species adapt to their environments, developing features that increase their chances of survival. Fossil evidence, genetic similarities, and observed instances of adaptation support the theory. Scientists continue to study how evolution works on both large and small scales. Some species evolve rapidly due to environmental pressures, while others remain unchanged for millions of years. Evolution is not a linear process but a branching one, leading to the vast diversity of life on Earth. Understanding evolution helps scientists develop better conservation strategies and medical treatments. By studying genetics and mutations, researchers gain insights into diseases and possible cures. Evolution remains a fundamental concept in biology, shaping our knowledge of life.",
  },
  {
    id: 6,
    difficulty: "hard",
    text: "Black holes are one of the most mysterious phenomena in the universe. These cosmic objects form when massive stars collapse under their own gravity, creating a region where nothing can escape, not even light. The boundary surrounding a black hole is called the event horizon, the point of no return. Scientists use advanced telescopes and mathematical models to study black holes, trying to understand their role in the cosmos. Some theories suggest they may connect different regions of space or even serve as gateways to other dimensions. Recently, astronomers captured the first image of a black hole’s shadow, confirming Einstein’s predictions. Black holes continue to challenge our understanding of physics, particularly in areas like quantum mechanics and relativity. While they seem destructive, they also play a role in galaxy formation. Exploring black holes may unlock answers to some of the biggest questions in science, including the nature of spacetime.",
  },
  {
    id: 7,
    difficulty: "hard",
    text: "Quantum mechanics is a branch of physics that studies particles at the smallest scales. Unlike classical physics, which follows predictable rules, quantum mechanics introduces uncertainty and strange phenomena. One famous concept is superposition, where a particle can exist in multiple states at once. Another is entanglement, where two particles remain connected regardless of distance. Scientists have used quantum mechanics to develop groundbreaking technologies, including quantum computing and encryption. Despite its success in explaining microscopic behavior, quantum mechanics is difficult to reconcile with general relativity, which describes gravity on large scales. This challenge has led physicists to search for a theory of everything, a single framework that unifies all forces of nature. Quantum mechanics continues to inspire new theories and experiments, pushing the boundaries of human understanding. As research progresses, the field may lead to revolutionary discoveries that change how we view reality and the universe itself.",
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const getTestText = (difficulty) => {
  const validTypingTest = typingTests.filter(
    (test) => difficulty === test.difficulty
  );
  return validTypingTest[getRandomInt(validTypingTest.length - 1)];
};
