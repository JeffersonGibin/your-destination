import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createRoutesTable1626039007560 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'routes',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                },
                {
                  name: 'title',
                  type: 'varchar',
                },
                {
                  name: 'start_position_latitude',
                  type: 'numeric',
                },
                {
                  name: 'start_position_longitude',
                  type: 'numeric',
                },
                {
                  name: 'end_position_latitude',
                  type: 'numeric',
                },
                {
                  name: 'end_position_longitude',
                  type: 'numeric',
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'CURRENT_TIMESTAMP',
                },
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('routes');
    }

}
