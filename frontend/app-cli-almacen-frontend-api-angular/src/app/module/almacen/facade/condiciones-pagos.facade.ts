/*
 * @fileoverview    {CondicionesPagosFacade}
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
import { CondicionesPagosViewModel } from '../model/condiciones-pagos.model';
import { CondicionesPagosState } from '../state/condiciones-pagos.state';
import { CondicionesPagosService } from '../service/condiciones-pagos.service';

/**
 * TODO: Description of {@code CondicionesPagosFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class CondicionesPagosFacade extends GenericFacade<CondicionesPagosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: CondicionesPagosService,
        entityState: CondicionesPagosState) {
        super(entityService, entityState);
    }

}
