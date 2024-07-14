// Suponha que quickDrawDataset seja uma matriz com os dados dos esboços
const quickDrawDataset = [
    // ... seus dados aqui
  ];
  
  // Gere um número aleatório entre 0 (inclusive) e o comprimento da matriz (exclusivo)
  const randomNumber = Math.floor(Math.random() * quickDrawDataset.length);
  
  // Imprima o nome do esboço aleatório no console
  console.log("Esboço aleatório:", quickDrawDataset[randomNumber]);
  
  // Atualize o texto da tag span com o nome do esboço a ser desenhado
  const sketch = quickDrawDataset[randomNumber];
  document.getElementById("sketchToDraw").textContent = `Esboço a Ser Desenhado: ${sketch}`;
  
  // Inicialize as outras variáveis
  let timerCounter = 0; // Contador do temporizador
  let timerCheck = ""; // Verificação do valor do temporizador
  let drawSketch = ""; // Estimativa aproximada do esboço desenhado
  let answerHolder = ""; // Valor quando os esboços coincidem
  let score = 0; // Pontuação para cada esboço desenhado corretamente