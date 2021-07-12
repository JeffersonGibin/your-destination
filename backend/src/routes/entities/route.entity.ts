import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { LocationEndPosition } from "./location-end-position.embbeded";
import { LocationStartPosition } from "./location-start-position.embbeded";

@Entity({
    name: 'routes'
})
export class Route {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column(() => LocationStartPosition, { prefix: '' })
    startPosition: LocationStartPosition;

    @Column(() => LocationEndPosition, { prefix: '' })
    endPosition: LocationEndPosition;


    @BeforeInsert()
    beforeInsertActions() {
        this.generateId();
    }

    generateId() {
        if (this.id) {
        return;
        }
        this.id = uuidv4();
    }

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}
