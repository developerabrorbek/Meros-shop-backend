import { CategoryModel } from "./category.model.js";

class CategoryService{
  #_model;
  constructor(){
    this.#_model = new CategoryModel()
  }

  async addCategory(name){
    const [data] = await this.#_model.addCategory(name)
    return data
  }

  async retrieveAllCategoriesTree(){
    const data = await this.#_model.retrieveAllCategoriesTree()
    return data
  }

  async retrieveAllCategories(){
    const data = await this.#_model.retrieveAllCategories()
    return data
  }

  async updateCategory(name, id){
    const [data] = await this.#_model.updateCategory(name, id)
    return data
  }

  async deleteCategory(id){
    const [data] = await this.#_model.deleteCategory(id)
    return data
  }

  async addSubCategory(name, parentId){
    const [data] = await this.#_model.addSubCategory(name, parentId)
    return data
  }

  async retrieveAllSubCategories(){
    const data = await this.#_model.retrieveAllSubCategories()
    return data
  }

  async retrieveAllSubCategoriesTree(){
    const data = await this.#_model.retrieveAllSubCategoriesTree()
    return data
  }

  async updateSubCategory(name, id){
    const [data] = await this.#_model.updateSubCategory(name, id)
  }

  async deleteSubCategory(id){
    const [data] = await this.#_model.deleteSubCategory(id)
    return data
  }

  async addDoubleSubCategory(name, parentId){
    const [data] =  await this.#_model.addDoubleSubCategory(name, parentId)
    return data
  }

  async retrieveAllDoubleSubCategories(){
    const data =  await this.#_model.retrieveDoubleSubCategories()
    return data
  }

  async retrieveAllDoubleSubCategoriesTree(){
    const data =  await this.#_model.retrieveDoubleSubCategoriesTree()
    return data
  }

  async updateDoubleSubCategory(name, id){
    const [data] =  await this.#_model.updateDoubleSubCategory(name, id)
    return data
  }

  async deleteDoubleSubCategory(id){
    const [data] =  await this.#_model.deleteDoubleSubCategory(id)
    return data
  }
}

export default new CategoryService()