/*
 * @fileoverview    {UbicacionesService}
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
import { UbicacionesViewModel } from '../model/ubicaciones.model';

/**
 * TODO: Description of {@code UbicacionesService}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class UbicacionesService extends GenericService<UbicacionesViewModel> {

    //public apiUrl: string = `${this.apiServer.rules}/api/v1/ubicaciones/`;
    public apiUrl: string = `http://127.0.0.1:8080/api/v1/ubicaciones`;
    public dtoList: string = `ubicacionesDTOList`;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: UbicacionesViewModel) {
        super(entityInstance);
    }

}
