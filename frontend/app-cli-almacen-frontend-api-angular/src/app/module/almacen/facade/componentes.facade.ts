/*
 * @overview        {ComponentesFacade}
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
import { ComponentesViewModel } from '../model/componentes.model';
import { ComponentesState } from '../state/componentes.state';
import { ComponentesService } from '../service/componentes.service';

/**
 * TODO: Description of {@code ComponentesFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ComponentesFacade extends GenericFacade<ComponentesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ComponentesService,
        entityState: ComponentesState) {
        super(entityService, entityState);
    }

}
