import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import RealEstate from "./realEstate.enity";


@Entity("categories")
class Category {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "varchar", length: 45, unique: true })
    name: string

};

export default Category;