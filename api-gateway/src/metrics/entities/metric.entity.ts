import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

type MetricProperties = Required<Metric>;

@Entity()
export class Metric {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public date: Date = new Date();
  
  @Column()
  public time: number = 0;

  @Column()
  public path: string = '';

  @Column()
  public method: string = '';

  @Column()
  public userAgent: string = '';

  public static fromProperties(value: MetricProperties): Metric {
    const metric = new Metric();
    metric.id = value.id;
    metric.date = value.date;
    metric.time = value.time;
    metric.path = value.path;
    metric.method = value.method;
    metric.userAgent = value.userAgent;
    return metric;
  }
}
