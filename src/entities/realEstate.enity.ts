import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import Address from "./address.entity";
import Category from "./category.entity";


@Entity("real_estate")
class RealEstate {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ type: "boolean", default: false })
    sold: boolean

    @Column({ type: "decimal", precision: 12, scale: 12, default: 0 })
    value: number | string

    @Column({ type: "integer" })
    size: number

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category)
    categories: Category[]

};

export default RealEstate;