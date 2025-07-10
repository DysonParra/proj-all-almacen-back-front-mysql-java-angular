/*
 * @overview        {ZonasContainerComponent}
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
import { Component } from '@angular/core';
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { ZonasViewModel } from '../../model/zonas.model';
import { ZonasFacade } from '../../facade/zonas.facade';

/**
 * TODO: Description of {@code ZonasContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-zonas-container',
    templateUrl: './zonas-container.component.html',
    standalone: false,
    styleUrls: ['./zonas-container.component.css']
})
export class ZonasContainerComponent extends GenericContainerComponent<ZonasViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ZonasViewModel,
        entityFacade: ZonasFacade) {
        super(entityInstance, entityFacade);
    }

}
