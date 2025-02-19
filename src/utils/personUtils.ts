import { persons } from '../consts.js';

export const findPersonByName = (name: string): any | null => {
  try {
    const normalizedName = name.trim().toLowerCase();
    const person = persons.find(p => 
      p.name.toLowerCase() === normalizedName
    );
    
    if (!person) {
      console.warn(`Person with name ${name} not found`);
      return null;
    }
    
    return person;
  } catch (error) {
    console.error("Error in findPersonByName:", error);
    return null;
  }
}; 