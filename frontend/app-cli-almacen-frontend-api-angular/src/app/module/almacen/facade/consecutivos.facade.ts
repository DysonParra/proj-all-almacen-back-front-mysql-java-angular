/*
 * @fileoverview    {ConsecutivosFacade}
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
import { ConsecutivosViewModel } from '../model/consecutivos.model';
import { ConsecutivosState } from '../state/consecutivos.state';
import { ConsecutivosService } from '../service/consecutivos.service';

/**
 * TODO: Description of {@code ConsecutivosFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ConsecutivosFacade extends GenericFacade<ConsecutivosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ConsecutivosService,
        entityState: ConsecutivosState) {
        super(entityService, entityState);
    }

}
