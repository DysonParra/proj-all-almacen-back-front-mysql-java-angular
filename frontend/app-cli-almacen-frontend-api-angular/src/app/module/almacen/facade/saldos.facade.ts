/*
 * @overview        {SaldosFacade}
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
import { SaldosViewModel } from '../model/saldos.model';
import { SaldosState } from '../state/saldos.state';
import { SaldosService } from '../service/saldos.service';

/**
 * TODO: Description of {@code SaldosFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class SaldosFacade extends GenericFacade<SaldosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: SaldosService,
        entityState: SaldosState) {
        super(entityService, entityState);
    }

}
