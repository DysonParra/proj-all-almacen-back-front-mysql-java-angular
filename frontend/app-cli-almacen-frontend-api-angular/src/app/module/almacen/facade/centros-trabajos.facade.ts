/*
 * @overview        {CentrosTrabajosFacade}
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
import { CentrosTrabajosViewModel } from '../model/centros-trabajos.model';
import { CentrosTrabajosState } from '../state/centros-trabajos.state';
import { CentrosTrabajosService } from '../service/centros-trabajos.service';

/**
 * TODO: Description of {@code CentrosTrabajosFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class CentrosTrabajosFacade extends GenericFacade<CentrosTrabajosViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: CentrosTrabajosService,
        entityState: CentrosTrabajosState) {
        super(entityService, entityState);
    }

}
