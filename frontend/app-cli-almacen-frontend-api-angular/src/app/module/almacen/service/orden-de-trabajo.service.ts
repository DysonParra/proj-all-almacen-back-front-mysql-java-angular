/*
 * @fileoverview    {OrdenDeTrabajoService}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
import { Injectable } from '@angular/core';
import { GenericService } from '@app/module/essential/service/generic.service';
import { OrdenDeTrabajoViewModel } from '../model/orden-de-trabajo.model';

/**
 * TODO: Description of {@code OrdenDeTrabajoService}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class OrdenDeTrabajoService extends GenericService<OrdenDeTrabajoViewModel> {

    //public apiUrl: string = `${this.apiServer.rules}/api/v1/orden-de-trabajo/`;
    public apiUrl: string = `http://127.0.0.1:8080/api/v1/orden-de-trabajo`;
    public dtoList: string = `ordenDeTrabajoDTOList`;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: OrdenDeTrabajoViewModel) {
        super(entityInstance);
    }

}
