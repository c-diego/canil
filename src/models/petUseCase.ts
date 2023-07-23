import { Pet } from './pet';
import { PetType } from './pet';
import { DATA } from './data';

export const petUseCase = {

  getAllPets: (): Pet[] => {
    return DATA;
  },

  getFromType: (type: PetType): Pet[] => {
    return DATA.filter(pet => pet.type === type);
  },

  getFromName: (name: string): Pet[] => {
    return DATA.filter(pet => {
      pet.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
  }

};