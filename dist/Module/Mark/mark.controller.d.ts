import { MarkService } from './mark.service';
import { MARKS } from './entity/Mark.entity';
export declare class MarkController {
    private readonly marksService;
    constructor(marksService: MarkService);
    getMarkDetailById(id: number): Promise<{
        success: boolean;
        data: any;
    }>;
    getMarkStudentById(id: number): Promise<{
        success: boolean;
        data: any;
    }>;
    getMarkTeacherById(id: number): Promise<{
        success: boolean;
        data: any;
    }>;
    getMarkAllDetail(): Promise<{
        success: boolean;
        data: any;
    }>;
    findAll(): Promise<MARKS[]>;
    findOne(id: number): Promise<MARKS>;
    create(marks: MARKS): Promise<MARKS>;
    update(id: number, marks: MARKS): Promise<void>;
    remove(id: number): Promise<void>;
}
