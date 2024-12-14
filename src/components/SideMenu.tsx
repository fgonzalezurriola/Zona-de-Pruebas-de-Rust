import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const problems = [
  { id: 1, title: "Hola Mundo", code: 'fn main() {\n    println!("¡Hola, mundo!");\n}' },
  { id: 2, title: "Sumar dos Números", code: 'fn main() {\n    let a = 5;\n    let b = 10;\n    let suma = a + b;\n    println!("La suma de {} y {} es {}", a, b, suma);\n}' },
  { id: 3, title: "Factorial", code: 'fn factorial(n: u32) -> u32 {\n    if n == 0 {\n        1\n    } else {\n        n * factorial(n - 1)\n    }\n}\n\nfn main() {\n    let num = 5;\n    println!("El factorial de {} es {}", num, factorial(num));\n}' },
  { id: 4, title: "Secuencia de Fibonacci", code: 'fn fibonacci(n: u32) -> u32 {\n    if n <= 1 {\n        n\n    } else {\n        fibonacci(n - 1) + fibonacci(n - 2)\n    }\n}\n\nfn main() {\n    let n = 10;\n    println!("El {}º número de Fibonacci es {}", n, fibonacci(n));\n}' },
  { id: 5, title: "Es Palíndromo", code: 'fn es_palindromo(s: &str) -> bool {\n    let s: String = s.chars().filter(|c| c.is_alphanumeric()).collect();\n    let s_reversed: String = s.chars().rev().collect();\n    s.eq_ignore_ascii_case(&s_reversed)\n}\n\nfn main() {\n    let palabra = "Anita lava la tina";\n    println!("¿Es palíndromo? {}", es_palindromo(palabra));\n}' },
  { id: 6, title: "Invertir un String", code: 'fn reverse_string(s: &str) -> String {\n    s.chars().rev().collect()\n}\n\nfn main() {\n    let texto = "Rust";\n    println!("Texto invertido: {}", reverse_string(texto));\n}' },
  { id: 7, title: "Es Número Primo", code: 'fn es_primo(n: u32) -> bool {\n    if n <= 1 {\n        return false;\n    }\n    for i in 2..n {\n        if n % i == 0 {\n            return false;\n        }\n    }\n    true\n}\n\nfn main() {\n    let numero = 29;\n    println!("¿Es {} primo? {}", numero, es_primo(numero));\n}' },
  { id: 8, title: "Two Sum", code: 'use std::collections::HashMap;\n\nfn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {\n    let mut mapa: HashMap<i32, usize> = HashMap::new();\n\n    for (i, &num) in nums.iter().enumerate() {\n        let complemento = target - num;\n        if let Some(&indice) = mapa.get(&complemento) {\n            return vec![indice as i32, i as i32];\n        }\n        mapa.insert(num, i);\n    }\n    \n    vec![] \n}\n\nfn main() {\n    let nums = vec![2, 7, 11, 15];\n    let target = 9;\n    let resultado = two_sum(nums, target);\n    \n    println!("Los índices que suman {} son: {:?}", target, resultado);\n}' },
  { id: 9, title: "Propiedad y Préstamos", code: 'fn main() {\n    let s1 = String::from("Hello, Rust!");\n    let len = calcular_longitud(&s1); \n    \n    println!("La longitud de \'{}\' es {}.", s1, len);\n}\n\nfn calcular_longitud(s: &String) -> usize {\n    s.len() \n}' },
  { id: 10, title: "Option y Result", code: 'fn dividir(dividendo: f64, divisor: f64) -> Result<f64, String> {\n    if divisor == 0.0 {\n        Err(String::from("Error: división entre cero"))\n    } else {\n        Ok(dividendo / divisor)\n    }\n}\n\nfn main() {\n    let resultado = dividir(10.0, 2.0);\n    match resultado {\n        Ok(cociente) => println!("El resultado es {}", cociente),\n        Err(error) => println!("{}", error),\n    }\n\n    let error_resultado = dividir(10.0, 0.0);\n    match error_resultado {\n        Ok(cociente) => println!("El resultado es {}", cociente),\n        Err(error) => println!("{}", error),\n    }\n}' },
];

const SideMenu: React.FC<{ onSelectProblem: (problem: any) => void }> = ({ onSelectProblem }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`bg-gray-800 overflow-y-auto text-white
      ${isExpanded ? 'w-64' : 'w-16'}  
      transition-all duration-300`}
      >
      {/* Expand button */}
      <button
        className="w-full p-4 flex justify-end items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </button>

      {/* Problem List */}
      <nav className="overflow-hidden">
        {problems.map((problem) => (
          <button
            key={problem.id}
            className="w-full text-left p-4 hover:bg-gray-700 transition-colors duration-100 whitespace-nowrap"
            onClick={() => onSelectProblem(problem)}
          >
            {isExpanded ? `P${problem.id}: ${problem.title}` : `P${problem.id}`}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SideMenu;