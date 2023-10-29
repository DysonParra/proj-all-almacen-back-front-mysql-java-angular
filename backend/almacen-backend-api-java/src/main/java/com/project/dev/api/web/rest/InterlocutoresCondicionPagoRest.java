/*
 * @fileoverview    {InterlocutoresCondicionPagoRest}
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
package com.project.dev.api.web.rest;

import com.project.dev.api.dto.InterlocutoresCondicionPagoDTO;
import com.project.dev.api.service.implementation.InterlocutoresCondicionPagoServiceImpl;
import com.project.dev.api.web.rest.assembler.InterlocutoresCondicionPagoRestAssembler;
import com.project.dev.api.web.rest.util.PaginationUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

/**
 * TODO: Definición de {@code InterlocutoresCondicionPagoRest}.
 *
 * @author Dyson Parra
 * @since 11
 */
@RestController
@RequestMapping(value = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE)
@Api(value = "InterlocutoresCondicionPago API")
public class InterlocutoresCondicionPagoRest {

    private final Logger log = LoggerFactory.getLogger(InterlocutoresCondicionPagoRest.class);
    private final InterlocutoresCondicionPagoServiceImpl entityService;
    private final InterlocutoresCondicionPagoRestAssembler entityRestAssembler;

    /**
     * Constructor.
     *
     * @param entityService       servicio de la entidad.
     * @param entityRestAssembler ensamblador de recurso de la entidad.
     */
    public InterlocutoresCondicionPagoRest(InterlocutoresCondicionPagoServiceImpl entityService,
            InterlocutoresCondicionPagoRestAssembler entityRestAssembler) {
        this.entityService = entityService;
        this.entityRestAssembler = entityRestAssembler;
    }

    /**
     * Obtiene todas las entidades existentes.
     *
     * @return lista de entidades almacenadas en la base de datos.
     */
    @ApiOperation(value = "Lista las [Entidades] existentes", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @GetMapping("/InterlocutoresCondicionPago")
    public CollectionModel<EntityModel<InterlocutoresCondicionPagoDTO>> getAllEntities() {
        log.debug("REST request to get all entities type InterlocutoresCondicionPago");
        List<EntityModel<InterlocutoresCondicionPagoDTO>> entities = null;
        try {
            entities = this.entityService.getAllEntities().parallelStream()
                    .map(entityRestAssembler::toModel)
                    .collect(Collectors.toList());
            CollectionModel<EntityModel<InterlocutoresCondicionPagoDTO>> entitiesCollection = new CollectionModel<>(entities);
            entitiesCollection.add(linkTo(methodOn(InterlocutoresCondicionPagoRest.class).getAllEntities()).withSelfRel());
            return entitiesCollection;
        } catch (Exception e) {
            e.printStackTrace(System.out);
        }
        return null;
    }

    /**
     * Obtiene todas los registros según la paginación suministrada.
     *
     * @param pageable indica la manera en que se paginarán los registros obtenidos.
     * @return entidades almacenadas en base de datos de forma paginada.
     */
    @ApiOperation(value = "Lista las [Entidades] existentes paginadas", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @GetMapping("/InterlocutoresCondicionPago/pages")
    public ResponseEntity<CollectionModel<EntityModel<InterlocutoresCondicionPagoDTO>>> getAllEntitiesPaged(Pageable pageable) {
        log.debug("REST request to get a page of all entities type InterlocutoresCondicionPago");
        Page<InterlocutoresCondicionPagoDTO> page = null;
        List<EntityModel<InterlocutoresCondicionPagoDTO>> entities = null;
        try {
            page = entityService.getAllEntitiesPaged(pageable);
            HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/InterlocutoresCondicionPago/pages");
            entities = page.getContent().parallelStream()
                    .map(entityRestAssembler::toModel)
                    .collect(Collectors.toList());
            CollectionModel<EntityModel<InterlocutoresCondicionPagoDTO>> entitiesCollection = new CollectionModel<>(entities);
            entitiesCollection.add(linkTo(methodOn(InterlocutoresCondicionPagoRest.class).getAllEntities()).withSelfRel());
            return new ResponseEntity<>(entitiesCollection, headers, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(System.out);
        }
        return null;
    }

    /**
     * Guarda los datos de una entidad.
     *
     * @param entityDTO entidad que va a ser almacenada.
     * @return entidad almacenada en la base de datos.
     */
    @ApiOperation(value = "Guarda la [Entidad] solicitada", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @PostMapping("/InterlocutoresCondicionPago")
    public ResponseEntity<?> saveEntity(@RequestBody InterlocutoresCondicionPagoDTO entityDTO) {
        log.debug("POST request to save a new entity type InterlocutoresCondicionPago");
        EntityModel<InterlocutoresCondicionPagoDTO> resource = null;
        try {
            resource = entityRestAssembler.toModel(entityService.saveUpdate(entityDTO));
            return ResponseEntity
                    .created(new URI(resource.getLink("self").orElse(new Link("self")).getHref()))
                    .body(resource);
        } catch (Exception e) {
            log.warn("Ocurrio un error en la llamada REST saveEntity", e);
            return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    /**
     * Actualiza los datos de una entidad.
     *
     * @param entityDTO entidad que va a ser almacenada.
     * @param id        es el identificador de la entidad.
     * @return entidad almacenada en la base de datos.
     */
    @ApiOperation(value = "Actualiza la [Entidad] solicitada", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @PutMapping("/InterlocutoresCondicionPago/{id}")
    public ResponseEntity<?> updateEntity(@RequestBody InterlocutoresCondicionPagoDTO entityDTO, @PathVariable String id) {
        return saveEntity(entityDTO);
    }

    /**
     * Obtiene la entidad según el id suministrado.
     *
     * @param id es el identificador de la entidad.
     * @return entidad almacenada en la base de datos.
     */
    @ApiOperation(value = "Lista la [Entidad] solicitada", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @GetMapping("/InterlocutoresCondicionPago/{id}")
    public ResponseEntity<EntityModel<InterlocutoresCondicionPagoDTO>> getEntity(@PathVariable String id) {
        log.debug(String.format("REST request to get the entity type InterlocutoresCondicionPago with id {} ", id));
        try {
            return Optional.of(this.entityService.getEntity(id))
                    .map(u -> new ResponseEntity<>(entityRestAssembler.toModel(u), HttpStatus.OK))
                    .orElse(new ResponseEntity<>(HttpStatus.NO_CONTENT));
        } catch (Exception e) {
            log.error("Ocurrio un error en la llamada REST getEntity", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Elimina los datos de una entidad.
     *
     * @param id identificador de la entidad que va a ser eliminada.
     * @return respuesta indicando si se eliminó la entidad.
     */
    @ApiOperation(value = "Elimina la [Entidad] solicitada", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @DeleteMapping("/InterlocutoresCondicionPago/{id}")
    public ResponseEntity<?> deleteEntity(@PathVariable String id) {
        log.debug("DELETE request to delete the entity InterlocutoresCondicionPago with id : {}", id);
        try {
            entityService.deleteEntity(id);
        } catch (Exception e) {
            e.printStackTrace(System.out);
        }
        return ResponseEntity.noContent().build();
    }

    /**
     * Obtiene registros de la base de datos según la búsqueda suministrada.
     *
     * @param query indica la búsqueda que se hará en la base de datos.
     * @return entidades almacenadas en base de datos encontradas.
     */
    @ApiOperation(value = "Lista la [Entidad] solicitada", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @GetMapping("/InterlocutoresCondicionPago/search/{query}")
    public CollectionModel<EntityModel<InterlocutoresCondicionPagoDTO>> searchEntities(@PathVariable String query) {
        log.debug("REST request to get the entities type InterlocutoresCondicionPago with the search : {} ", query);
        List<EntityModel<InterlocutoresCondicionPagoDTO>> entities = null;
        try {
            entities = this.entityService.searchEntities(query).parallelStream()
                    .map(entityRestAssembler::toModel)
                    .collect(Collectors.toList());
            CollectionModel<EntityModel<InterlocutoresCondicionPagoDTO>> entitiesCollection = new CollectionModel<>(entities);
            entitiesCollection.add(linkTo(methodOn(InterlocutoresCondicionPagoRest.class).getAllEntities()).withSelfRel());
            return entitiesCollection;
        } catch (Exception e) {
            e.printStackTrace(System.out);
        }
        return null;
    }

    /**
     * Obtiene registros de la base de datos según la búsqueda y paginación suministradas.
     *
     * @param query    indica la búsqueda que se hará en la base de datos.
     * @param pageable indica la manera en que se paginarán los registros obtenidos.
     * @return entidades almacenadas en base de datos encontradas.
     */
    @ApiOperation(value = "Lista las [Entidades] existentes paginadas", response = Iterable.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista recuperada exitosamente"),
        @ApiResponse(code = 401, message = "No autorizado para ver el recurso."),
        @ApiResponse(code = 403, message = "Prohibido acceder al recurso que intenta alcanzar"),
        @ApiResponse(code = 404, message = "No se encuentra el recurso que intentabas alcanzar")
    })
    @GetMapping("/InterlocutoresCondicionPago/search/{query}/pages")
    public ResponseEntity<CollectionModel<EntityModel<InterlocutoresCondicionPagoDTO>>> searchEntitiesPaged(@PathVariable String query, Pageable pageable) {
        log.debug("REST request to get a page of the entities type InterlocutoresCondicionPago with the search : {}", query);
        Page<InterlocutoresCondicionPagoDTO> page = null;
        List<EntityModel<InterlocutoresCondicionPagoDTO>> entities = null;
        try {
            page = entityService.searchEntitiesPaged(query, pageable);
            HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/InterlocutoresCondicionPago/search/{query}/pages/" + query);
            entities = page.getContent().parallelStream()
                    .map(entityRestAssembler::toModel)
                    .collect(Collectors.toList());
            CollectionModel<EntityModel<InterlocutoresCondicionPagoDTO>> entitiesCollection = new CollectionModel<>(entities);
            entitiesCollection.add(linkTo(methodOn(InterlocutoresCondicionPagoRest.class).getAllEntities()).withSelfRel());
            return new ResponseEntity<>(entitiesCollection, headers, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(System.out);
        }
        return null;
    }

}
