/*
 * @overview        {EstadosSaldosFacade}
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
import { EstadosSaldosViewModel } from '../model/estados-saldos.model';
import { EstadosSaldosState } from '../state/estados-saldos.state';
import { EstadosSaldosService } from '../service/estados-saldos.service';

/**
 * TODO: Description of {@code EstadosSaldosFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class EstadosSaldosFacade extends GenericFacade<EstadosSaldosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: EstadosSaldosService,
        entityState: EstadosSaldosState) {
        super(entityService, entityState);
    }

}
