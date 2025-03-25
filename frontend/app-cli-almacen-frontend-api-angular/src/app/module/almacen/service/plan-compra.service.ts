/*
 * @fileoverview    {PlanCompraService}
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
import { PlanCompraViewModel } from '../model/plan-compra.model';

/**
 * TODO: Description of {@code PlanCompraService}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class PlanCompraService extends GenericService<PlanCompraViewModel> {

    //public apiUrl: string = `${this.apiServer.rules}/api/v1/plan-compra/`;
    public apiUrl: string = `http://127.0.0.1:8080/api/v1/plan-compra`;
    public dtoList: string = `planCompraDTOList`;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: PlanCompraViewModel) {
        super(entityInstance);
    }

}
