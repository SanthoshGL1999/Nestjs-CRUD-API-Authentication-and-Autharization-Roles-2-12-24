import { Body, Controller, Delete, Get, Injectable, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TEACHERS } from './entity/Teacher.entity';
import { JwtAuthGuard } from '../auth/Guards/Jwt-auth.guard';
import { Roles } from '../auth/Guards/decorator/roles.decorator';
import { role } from '../auth/Guards/enums/role.enum';
import { RolesGuard } from '../auth/Guards/roles/roles.guard';



@Controller('teacher')
@UseGuards(JwtAuthGuard,RolesGuard)
@Roles(role.ADMIN)
export class TeacherController {
    constructor(private readonly teacherService: TeacherService){}
    @Roles(role.TEACHER)
    @Get(':id/detail')
    async getTeacherDetailById(@Param('id') id: number) {
        const data = await this.teacherService.getTeacherDetailById(id);
        return{
            success: true,
            data,
        };
    }

    @Roles(role.TEACHER)
    @Get(':id/student')
    async getTeacherStudentDetail(@Param('id')id: number) {
        const data = await this.teacherService.getTeacherStduentDetail(id);
        return{
            success: true,
            data,
        };
    }

    // @Get(':id/mark')
    // async getTeacherMarkDetail(@Param('id')id: number) {
    //     const data = await this.teacherService.getTeacherMarkDetail(id);
    //     return{
    //         success: true,
    //         data,
    //     };
    // }

    @Roles(role.TEACHER)
    @Get(':id/project')
    async getTeacherProjectDetail(@Param('id')id: number) {
        const data = await this.teacherService.getTeacherProjectDetail(id);
        return{
            success: true,
            data,
        };
    }

    @Roles(role.TEACHER)
    @Get('alldetail')
    async getAllDetail() {
        const data = await this.teacherService.getAllDetail();
        return{
            success: true,
            data,
        };
    }

    @Roles(role.TEACHER)
    @Get()
    findAll(){
        return this.teacherService.findAll();
    }
    
    @Roles(role.TEACHER)
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.teacherService.findOne(id);
    }

    @Post()
    create(@Body() teacher:TEACHERS){
        return this.teacherService.create(teacher)
    }
    
    
    @Put(':id')
    update(@Param('id') id: number, @Body() teacher: TEACHERS){
        return this.teacherService.update(id,teacher)
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void>{
        return this.teacherService.remove(id)
    }


}
