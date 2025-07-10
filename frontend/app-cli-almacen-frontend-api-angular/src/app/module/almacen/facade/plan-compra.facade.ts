/*
 * @overview        {PlanCompraFacade}
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
import { GenericFacade } from '@app/module/essential/facade/generic.facade';
import { PlanCompraViewModel } from '../model/plan-compra.model';
import { PlanCompraState } from '../state/plan-compra.state';
import { PlanCompraService } from '../service/plan-compra.service';

/**
 * TODO: Description of {@code PlanCompraFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class PlanCompraFacade extends GenericFacade<PlanCompraViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: PlanCompraService,
        entityState: PlanCompraState) {
        super(entityService, entityState);
    }

}
