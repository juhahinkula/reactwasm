use wasm_bindgen::prelude::*;

#[wasm_bindgen]
// Using iteration due to better performance when num > 40
pub fn fibonacci(num: u32) -> u32 {
    let mut first_number:u32 = 0;
    let mut second_number:u32 = 0;
    let mut current_number:u32 = 1;
    let mut i:u32 = 1;
 
    while i < num {
        first_number = second_number;
        second_number = current_number;
        current_number = first_number + second_number;
 
        i = i + 1;
    }
    current_number
}