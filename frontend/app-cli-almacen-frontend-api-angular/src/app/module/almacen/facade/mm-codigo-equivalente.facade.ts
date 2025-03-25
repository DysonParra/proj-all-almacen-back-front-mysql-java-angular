/*
 * @fileoverview    {MmCodigoEquivalenteFacade}
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
import { MmCodigoEquivalenteViewModel } from '../model/mm-codigo-equivalente.model';
import { MmCodigoEquivalenteState } from '../state/mm-codigo-equivalente.state';
import { MmCodigoEquivalenteService } from '../service/mm-codigo-equivalente.service';

/**
 * TODO: Description of {@code MmCodigoEquivalenteFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MmCodigoEquivalenteFacade extends GenericFacade<MmCodigoEquivalenteViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MmCodigoEquivalenteService,
        entityState: MmCodigoEquivalenteState) {
        super(entityService, entityState);
    }

}
